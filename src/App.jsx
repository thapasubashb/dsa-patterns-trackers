import React, { useState, useEffect, useMemo } from "react";
import { DSA_PATTERNS_DATA } from "./data/dsaPatternsData";
import {
  CheckCircle2,
  Circle,
  ExternalLink,
  Search,
  Bookmark,
  ChevronDown,
  ChevronRight,
  Code2,
  Filter,
  Zap,
  Sparkles,
  RotateCcw,
  BookOpen,
  User,
  Layers,
  Trophy,
  Terminal,
  Flame,
  ArrowUpRight,
  X
} from "lucide-react";

// Custom SVG Icon for GitHub (bypasses missing brand icons in lucide-react)
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export default function App() {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("dsa_completed_67");
    return saved ? JSON.parse(saved) : {};
  });

  const [bookmarked, setBookmarked] = useState(() => {
    const saved = localStorage.getItem("dsa_bookmarked_67");
    return saved ? JSON.parse(saved) : {};
  });

  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [collapsedTopics, setCollapsedTopics] = useState({});

  useEffect(() => {
    localStorage.setItem("dsa_completed_67", JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem("dsa_bookmarked_67", JSON.stringify(bookmarked));
  }, [bookmarked]);

  const toggleCompleted = (qId) => {
    setCompleted((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleBookmarked = (qId) => {
    setBookmarked((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleTopicCollapse = (topicName) => {
    setCollapsedTopics((prev) => ({ ...prev, [topicName]: !prev[topicName] }));
  };

  const resetAll = () => {
    if (window.confirm("Are you sure you want to reset all problem progress?")) {
      setCompleted({});
      setBookmarked({});
    }
  };

  const uniqueTopics = useMemo(() => {
    return ["All", ...Array.from(new Set(DSA_PATTERNS_DATA.map((item) => item.topic)))];
  }, []);

  const allQuestions = useMemo(() => {
    const list = [];
    DSA_PATTERNS_DATA.forEach((p) => p.questions.forEach((q) => list.push(q)));
    return list;
  }, []);

  const totalCount = allQuestions.length;
  const doneCount = Object.values(completed).filter(Boolean).length;
  const savedCount = Object.values(bookmarked).filter(Boolean).length;
  const progressPercent = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  const filteredData = useMemo(() => {
    return DSA_PATTERNS_DATA.filter((item) => {
      const matchesTopic = selectedTopic === "All" || item.topic === selectedTopic;

      const matchesSearch =
        item.topic.toLowerCase().includes(search.toLowerCase()) ||
        item.pattern.toLowerCase().includes(search.toLowerCase()) ||
        item.subPattern.toLowerCase().includes(search.toLowerCase()) ||
        item.trigger.toLowerCase().includes(search.toLowerCase()) ||
        item.questions.some((q) => q.name.toLowerCase().includes(search.toLowerCase()));

      const matchingQuestions = item.questions.filter((q) => {
        const matchesDiff = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
        const isDone = !!completed[q.id];
        const isSaved = !!bookmarked[q.id];

        const matchesStatus =
          selectedStatus === "All" ||
          (selectedStatus === "Completed" && isDone) ||
          (selectedStatus === "Incomplete" && !isDone) ||
          (selectedStatus === "Bookmarked" && isSaved);

        return matchesDiff && matchesStatus;
      });

      return matchesTopic && matchesSearch && matchingQuestions.length > 0;
    }).map((item) => ({
      ...item,
      questions: item.questions.filter((q) => {
        const matchesDiff = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
        const isDone = !!completed[q.id];
        const isSaved = !!bookmarked[q.id];

        const matchesStatus =
          selectedStatus === "All" ||
          (selectedStatus === "Completed" && isDone) ||
          (selectedStatus === "Incomplete" && !isDone) ||
          (selectedStatus === "Bookmarked" && isSaved);

        return matchesDiff && matchesStatus;
      }),
    }));
  }, [search, selectedTopic, selectedDifficulty, selectedStatus, completed, bookmarked]);

  const groupedData = useMemo(() => {
    const map = {};
    filteredData.forEach((item) => {
      if (!map[item.topic]) map[item.topic] = [];
      map[item.topic].push(item);
    });
    return map;
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      {/* Background Radial Glow Ambient Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-indigo-600/10 via-violet-600/10 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[400px] bg-purple-600/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Modern High-End Sticky Glass Navbar */}
      <header className="border-b border-slate-800/80 bg-[#070b19]/80 backdrop-blur-xl sticky top-0 z-50 shadow-2xl shadow-indigo-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 bg-gradient-to-tr from-indigo-500 via-violet-600 to-cyan-400 rounded-xl shadow-lg shadow-indigo-500/25 text-white ring-1 ring-white/20">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  DSA PATTERNFORGE
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-indigo-300 border border-indigo-500/30">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block font-medium">
                67 Algorithmic Patterns & Interview Trigger Matrix
              </p>
            </div>
          </div>

          {/* Quick Nav Links & Actions */}
          <div className="flex items-center space-x-2.5">
            <a
              href="https://github.com/thapasubashb"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 px-3 py-2 rounded-xl transition-all shadow-sm"
            >
              <User className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">Subash</span>
            </a>

            <a
              href="https://github.com/thapasubashb/dsa-patterns-trackers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 px-3.5 py-2 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all border border-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub Repository</span>
            </a>

            <button
              onClick={resetAll}
              title="Reset All Progress"
              className="p-2 text-slate-400 hover:text-rose-400 bg-slate-900/90 hover:bg-rose-950/30 border border-slate-800 hover:border-rose-800/50 rounded-xl transition-all shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-20 space-y-8 w-full flex-grow relative z-10">
        
        {/* Dashboard Hero Banner & Metrics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Main Progress Tracker Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#0c1226] via-[#090d1c] to-[#050814] border border-indigo-900/50 rounded-2xl p-6 shadow-2xl shadow-black/60 relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/40 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/10 via-violet-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Interview Readiness
                </span>
                <h2 className="text-xl font-extrabold text-white tracking-tight">
                  Overall Completion
                </h2>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300">
                  {progressPercent}%
                </div>
                <p className="text-[11px] font-medium text-slate-400">
                  {doneCount} / {totalCount} Solved
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="w-full bg-slate-900/90 border border-slate-800/80 h-3.5 rounded-full overflow-hidden p-0.5 shadow-inner">
                <div
                  className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Metric Box 1: Pattern Count */}
          <div className="bg-[#0b0f1e]/80 border border-slate-800/80 rounded-2xl p-5 shadow-xl flex items-center space-x-4 hover:border-slate-700 transition-all">
            <div className="p-3.5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400 shadow-inner">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">67</div>
              <div className="text-xs font-medium text-slate-400">Core DSA Patterns</div>
              <div className="text-[10px] text-indigo-400/80 mt-0.5">High-Frequency Sheet</div>
            </div>
          </div>

          {/* Metric Box 2: Saved Bookmarks */}
          <div className="bg-[#0b0f1e]/80 border border-slate-800/80 rounded-2xl p-5 shadow-xl flex items-center space-x-4 hover:border-slate-700 transition-all">
            <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 shadow-inner">
              <Bookmark className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">{savedCount}</div>
              <div className="text-xs font-medium text-slate-400">Bookmarked Items</div>
              <div className="text-[10px] text-amber-400/80 mt-0.5">Saved for Revision</div>
            </div>
          </div>
        </section>

        {/* Developer Search & Interactive Filter Control Bar */}
        <section className="bg-[#0b0f1e]/90 border border-slate-800/90 p-4 rounded-2xl shadow-2xl backdrop-blur-md space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search pattern, trigger keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-[#060913] border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-3 text-slate-500 hover:text-slate-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Topic Filter Select */}
            <div className="relative">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#060913] border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none transition-all cursor-pointer"
              >
                {uniqueTopics.map((t) => (
                  <option key={t} value={t} className="bg-slate-900 text-slate-200">
                    Topic: {t}
                  </option>
                ))}
              </select>
              <Filter className="w-4 h-4 absolute right-3.5 top-3.5 text-slate-500 pointer-events-none" />
            </div>

            {/* Difficulty Filter Select */}
            <div className="relative">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#060913] border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none transition-all cursor-pointer"
              >
                <option value="All" className="bg-slate-900">All Difficulties</option>
                <option value="Easy" className="bg-slate-900 text-emerald-400">Easy</option>
                <option value="Medium" className="bg-slate-900 text-amber-400">Medium</option>
                <option value="Hard" className="bg-slate-900 text-rose-400">Hard</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3.5 top-3.5 text-slate-500 pointer-events-none" />
            </div>

            {/* Status Filter Select */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#060913] border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none transition-all cursor-pointer"
              >
                <option value="All" className="bg-slate-900">All Statuses</option>
                <option value="Completed" className="bg-slate-900">Completed Only</option>
                <option value="Incomplete" className="bg-slate-900">Incomplete Only</option>
                <option value="Bookmarked" className="bg-slate-900">Bookmarked Only</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3.5 top-3.5 text-slate-500 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Dynamic Accordion Topic Sections */}
        <section className="space-y-6">
          {Object.keys(groupedData).length === 0 ? (
            <div className="text-center py-20 bg-[#0b0f1e]/40 border border-slate-800/80 rounded-2xl space-y-3">
              <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-slate-400 text-sm font-medium">No matching patterns or questions found.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedTopic("All");
                  setSelectedDifficulty("All");
                  setSelectedStatus("All");
                }}
                className="text-xs text-indigo-400 hover:text-indigo-300 underline font-semibold"
              >
                Reset Filter Criteria
              </button>
            </div>
          ) : (
            Object.entries(groupedData).map(([topicName, patternItems]) => {
              const isCollapsed = !!collapsedTopics[topicName];

              return (
                <div
                  key={topicName}
                  className="border border-slate-800/80 bg-[#080d1a]/80 rounded-2xl overflow-hidden shadow-2xl transition-all"
                >
                  {/* Accordion Group Header */}
                  <div
                    onClick={() => toggleTopicCollapse(topicName)}
                    className="p-4 sm:px-6 bg-gradient-to-r from-[#0d1326] to-[#0a0f1f] cursor-pointer flex items-center justify-between border-b border-slate-800/80 hover:bg-[#11182e] transition-colors select-none"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {isCollapsed ? (
                          <ChevronRight className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                      <h2 className="text-base sm:text-lg font-extrabold text-white tracking-wide flex items-center gap-2">
                        <span className="text-slate-400 font-normal text-sm">Topic:</span>
                        <span className="text-indigo-300">{topicName}</span>
                      </h2>
                    </div>
                    
                    <span className="text-xs bg-indigo-950/80 border border-indigo-800/40 px-3 py-1 rounded-full text-indigo-300 font-mono font-semibold">
                      {patternItems.length} {patternItems.length === 1 ? "Pattern" : "Patterns"}
                    </span>
                  </div>

                  {/* Accordion Items Body */}
                  {!isCollapsed && (
                    <div className="p-4 sm:p-6 space-y-6">
                      {patternItems.map((item) => (
                        <div
                          key={item.id}
                          className="bg-[#0c1122] border border-slate-800/90 hover:border-slate-700/90 rounded-2xl p-5 space-y-5 shadow-lg transition-all"
                        >
                          {/* Pattern Details Banner */}
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center space-x-2.5">
                                <span className="text-xs font-black text-indigo-400 font-mono bg-indigo-950/80 border border-indigo-800/50 px-2.5 py-1 rounded-md">
                                  #{item.id}
                                </span>
                                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                                  {item.pattern}
                                </h3>
                              </div>
                              <span className="text-xs bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-slate-300 font-medium">
                                Sub-pattern: <span className="text-violet-400 font-semibold">{item.subPattern}</span>
                              </span>
                            </div>

                            {/* Flashcard Trigger Terminal Component */}
                            <div className="relative bg-[#050812] border border-indigo-900/40 rounded-xl p-3.5 shadow-inner space-y-1.5">
                              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-800/60 pb-1.5 mb-1">
                                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                                  PATTERN RECOGNITION TRIGGER
                                </span>
                                <span className="text-[10px] text-slate-600">Flashcard</span>
                              </div>
                              <p className="text-xs sm:text-sm font-mono text-cyan-300 leading-relaxed">
                                {item.trigger}
                              </p>
                            </div>
                          </div>

                          {/* Practice Questions List */}
                          <div className="space-y-2">
                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                              Practice Questions ({item.questions.length})
                            </div>
                            
                            <div className="divide-y divide-slate-800/70 border border-slate-800/80 rounded-xl overflow-hidden bg-[#070a16]">
                              {item.questions.map((q) => {
                                const isDone = !!completed[q.id];
                                const isSaved = !!bookmarked[q.id];

                                return (
                                  <div
                                    key={q.id}
                                    className={`p-3.5 sm:px-4 flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-all ${
                                      isDone ? "bg-emerald-950/10" : ""
                                    }`}
                                  >
                                    <div className="flex items-center space-x-3.5 min-w-0">
                                      <button
                                        onClick={() => toggleCompleted(q.id)}
                                        className="text-slate-600 hover:text-emerald-400 transition-colors shrink-0"
                                      >
                                        {isDone ? (
                                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                        ) : (
                                          <Circle className="w-5 h-5" />
                                        )}
                                      </button>
                                      
                                      <span
                                        className={`text-xs sm:text-sm font-medium truncate ${
                                          isDone ? "line-through text-slate-500" : "text-slate-200"
                                        }`}
                                      >
                                        {q.name}
                                      </span>
                                    </div>

                                    <div className="flex items-center space-x-3 shrink-0">
                                      {/* Difficulty Tag */}
                                      <span
                                        className={`text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md font-bold tracking-wide ${
                                          q.difficulty === "Easy"
                                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                            : q.difficulty === "Medium"
                                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                            : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                        }`}
                                      >
                                        {q.difficulty}
                                      </span>

                                      {/* Bookmark Button */}
                                      <button
                                        onClick={() => toggleBookmarked(q.id)}
                                        className="p-1 text-slate-500 hover:text-amber-400 transition-colors"
                                      >
                                        <Bookmark
                                          className={`w-4 h-4 ${
                                            isSaved
                                              ? "fill-amber-400 text-amber-400"
                                              : "text-slate-600"
                                          }`}
                                        />
                                      </button>

                                      {/* External Solve Link Button */}
                                      <a
                                        href={q.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-1 text-xs text-indigo-300 hover:text-white bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 px-3 py-1.5 rounded-lg transition-all font-medium group"
                                      >
                                        <span>Solve</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                      </a>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </section>
      </main>

      {/* Modern Developer Dark Footer */}
      <footer className="border-t border-slate-800/80 bg-[#040711] py-8 text-xs text-slate-400 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="space-y-1">
            <p className="font-semibold text-slate-300 flex items-center justify-center sm:justify-start gap-1.5">
              Created by{" "}
              <a
                href="https://github.com/thapasubashb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-bold underline underline-offset-4 decoration-indigo-500/40 transition-colors"
              >
                Subash
              </a>
            </p>
            <p className="text-slate-500 text-[11px]">
              Complete 67 Algorithmic Patterns & Coding Interview Tracker
            </p>
          </div>

          <div className="flex items-center space-x-4 font-medium">
            <a
              href="https://github.com/thapasubashb/dsa-patterns-trackers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>Project Source</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}