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
  Filter,
  Zap,
  Sparkles,
  RotateCcw,
  BookOpen,
  User,
  Layers,
  ArrowUpRight,
  X,
  SlidersHorizontal,
  Command,
  Check,
  Code2
} from "lucide-react";

// Production-grade SVG GitHub Icon component
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

  const difficultyStats = useMemo(() => {
    let easyDone = 0, easyTotal = 0;
    let medDone = 0, medTotal = 0;
    let hardDone = 0, hardTotal = 0;

    allQuestions.forEach((q) => {
      const isDone = !!completed[q.id];
      if (q.difficulty === "Easy") {
        easyTotal++;
        if (isDone) easyDone++;
      } else if (q.difficulty === "Medium") {
        medTotal++;
        if (isDone) medDone++;
      } else if (q.difficulty === "Hard") {
        hardTotal++;
        if (isDone) hardDone++;
      }
    });

    return { easyDone, easyTotal, medDone, medTotal, hardDone, hardTotal };
  }, [allQuestions, completed]);

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
    <div className="min-h-screen bg-[#090a0f] text-slate-100 font-sans antialiased selection:bg-violet-500 selection:text-white flex flex-col justify-between relative">
      
      {/* Background Micro Glow Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-tr from-violet-600/10 via-indigo-500/10 to-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Header / Command Navigation */}
      <header className="border-b border-white/[0.08] bg-[#090a0f]/80 backdrop-blur-md sticky top-0 z-50 shadow-2xl shadow-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Brand Visual Identity */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-300" />
              <div className="relative p-2 bg-zinc-950 border border-white/10 rounded-xl text-violet-400">
                <Code2 className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-bold tracking-tight text-white flex items-center gap-2 font-mono">
                  pattern_tracker<span className="text-violet-400">.dsa</span>
                </h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  v2.4
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 hidden sm:block font-medium">
                67 Algorithmic Patterns & Real-Time Skill Tracker
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center space-x-2.5">
            <a
              href="https://github.com/thapasubashb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 px-3 py-1.5 rounded-lg transition-all"
            >
              <User className="w-3.5 h-3.5 text-violet-400" />
              <span className="hidden md:inline">Subash</span>
            </a>

            <a
              href="https://github.com/thapasubashb/dsa-patterns-trackers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 px-3 py-1.5 rounded-lg shadow-sm shadow-violet-900/40 border border-violet-400/20 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub Repo</span>
            </a>

            <button
              onClick={resetAll}
              title="Reset Progress"
              className="p-1.5 text-zinc-400 hover:text-rose-400 bg-zinc-900/90 hover:bg-rose-950/30 border border-white/10 hover:border-rose-900/40 rounded-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Experience Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-20 space-y-6 w-full flex-grow relative z-10">
        
        {/* Metric Intelligence Dashboard */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Primary Progress Hero Box */}
          <div className="md:col-span-2 bg-zinc-950/80 border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold tracking-wider text-violet-400 uppercase bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20">
                  <Sparkles className="w-3 h-3 text-violet-400" />
                  Mastery Index
                </span>
                <h2 className="text-xl font-black text-white tracking-tight">
                  Overall Completion
                </h2>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 font-mono">
                  {progressPercent}%
                </div>
                <p className="text-[11px] text-zinc-400 font-mono">
                  {doneCount} / {totalCount} Problems
                </p>
              </div>
            </div>

            {/* Glowing Custom Progress Visualizer */}
            <div className="space-y-2">
              <div className="w-full bg-zinc-900 border border-white/5 h-3 rounded-full overflow-hidden p-0.5">
                <div
                  className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Mini Difficulty Breakdown Badges */}
              <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1 font-mono">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Easy: <strong className="text-zinc-200">{difficultyStats.easyDone}/{difficultyStats.easyTotal}</strong>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Med: <strong className="text-zinc-200">{difficultyStats.medDone}/{difficultyStats.medTotal}</strong>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  Hard: <strong className="text-zinc-200">{difficultyStats.hardDone}/{difficultyStats.hardTotal}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Metric Item 1 */}
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 shadow-xl flex items-center space-x-4">
            <div className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white font-mono">67</div>
              <div className="text-xs font-medium text-zinc-400">Core Patterns</div>
              <div className="text-[10px] text-zinc-500 mt-0.5">Categorized by Topic</div>
            </div>
          </div>

          {/* Metric Item 2 */}
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 shadow-xl flex items-center space-x-4">
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
              <Bookmark className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white font-mono">{savedCount}</div>
              <div className="text-xs font-medium text-zinc-400">Saved Items</div>
              <div className="text-[10px] text-zinc-500 mt-0.5">Quick Review Deck</div>
            </div>
          </div>
        </section>

        {/* Filter Toolbar Engine */}
        <section className="bg-zinc-950/90 border border-white/10 p-3.5 rounded-2xl shadow-xl space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            
            {/* Command-style Search Box */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-zinc-500" />
              <input
                type="text"
                placeholder="Search pattern, trigger, or problem..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-zinc-900/90 border border-white/10 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-mono"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-2.5 text-zinc-500 hover:text-zinc-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter: Topic */}
            <div className="relative">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900/90 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-violet-500 appearance-none transition-all cursor-pointer font-mono"
              >
                {uniqueTopics.map((t) => (
                  <option key={t} value={t} className="bg-zinc-900">
                    Topic: {t}
                  </option>
                ))}
              </select>
              <Filter className="w-3.5 h-3.5 absolute right-3 top-3 text-zinc-500 pointer-events-none" />
            </div>

            {/* Filter: Difficulty */}
            <div className="relative">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900/90 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-violet-500 appearance-none transition-all cursor-pointer font-mono"
              >
                <option value="All" className="bg-zinc-900">All Difficulties</option>
                <option value="Easy" className="bg-zinc-900 text-emerald-400">Easy</option>
                <option value="Medium" className="bg-zinc-900 text-amber-400">Medium</option>
                <option value="Hard" className="bg-zinc-900 text-rose-400">Hard</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-3 text-zinc-500 pointer-events-none" />
            </div>

            {/* Filter: Status */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900/90 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-violet-500 appearance-none transition-all cursor-pointer font-mono"
              >
                <option value="All" className="bg-zinc-900">All Statuses</option>
                <option value="Completed" className="bg-zinc-900">Completed</option>
                <option value="Incomplete" className="bg-zinc-900">Incomplete</option>
                <option value="Bookmarked" className="bg-zinc-900">Bookmarked</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-3 text-zinc-500 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Structured Pattern Accordion Groups */}
        <section className="space-y-4">
          {Object.keys(groupedData).length === 0 ? (
            <div className="text-center py-20 bg-zinc-950/40 border border-white/10 rounded-2xl space-y-3">
              <BookOpen className="w-10 h-10 text-zinc-600 mx-auto" />
              <p className="text-zinc-400 text-xs font-mono">No matching algorithmic patterns found.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedTopic("All");
                  setSelectedDifficulty("All");
                  setSelectedStatus("All");
                }}
                className="text-xs text-violet-400 hover:text-violet-300 font-mono underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            Object.entries(groupedData).map(([topicName, patternItems]) => {
              const isCollapsed = !!collapsedTopics[topicName];

              return (
                <div
                  key={topicName}
                  className="border border-white/10 bg-zinc-950/60 rounded-2xl overflow-hidden shadow-xl"
                >
                  {/* Category Banner Header */}
                  <div
                    onClick={() => toggleTopicCollapse(topicName)}
                    className="px-5 py-3.5 bg-zinc-900/80 cursor-pointer flex items-center justify-between border-b border-white/10 hover:bg-zinc-800/60 transition-colors select-none"
                  >
                    <div className="flex items-center space-x-3">
                      {isCollapsed ? (
                        <ChevronRight className="w-4 h-4 text-zinc-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-violet-400" />
                      )}
                      <h2 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
                        <span className="text-zinc-400 font-normal">Topic:</span>
                        <span className="text-violet-300">{topicName}</span>
                      </h2>
                    </div>

                    <span className="text-xs bg-zinc-950 border border-white/10 px-2.5 py-0.5 rounded-full text-zinc-400 font-mono">
                      {patternItems.length} {patternItems.length === 1 ? "pattern" : "patterns"}
                    </span>
                  </div>

                  {/* Pattern Items Container */}
                  {!isCollapsed && (
                    <div className="p-4 space-y-4">
                      {patternItems.map((item) => (
                        <div
                          key={item.id}
                          className="bg-zinc-900/40 border border-white/5 rounded-xl p-4 space-y-4 shadow-sm hover:border-white/10 transition-all"
                        >
                          {/* Pattern Details Header */}
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center space-x-2">
                                <span className="text-[11px] font-mono font-bold text-violet-400 bg-violet-950/60 border border-violet-800/40 px-2 py-0.5 rounded">
                                  #{item.id}
                                </span>
                                <h3 className="text-sm font-bold text-white">
                                  {item.pattern}
                                </h3>
                              </div>
                              <span className="text-xs bg-zinc-900 border border-white/10 px-2.5 py-1 rounded text-zinc-300 font-mono">
                                Sub-pattern: <span className="text-violet-300">{item.subPattern}</span>
                              </span>
                            </div>

                            {/* Trigger Identification Box */}
                            <div className="bg-[#05070d] border border-violet-900/30 rounded-lg p-3 space-y-1">
                              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-400 uppercase">
                                <Zap className="w-3 h-3 text-amber-400" />
                                Trigger Pattern
                              </div>
                              <p className="text-xs font-mono text-cyan-300 leading-relaxed">
                                {item.trigger}
                              </p>
                            </div>
                          </div>

                          {/* Problem Rows Table */}
                          <div className="space-y-1.5">
                            <div className="text-[10px] font-mono uppercase text-zinc-500 font-semibold px-1">
                              Practice Questions
                            </div>

                            <div className="divide-y divide-white/5 border border-white/5 rounded-lg overflow-hidden bg-zinc-950/80">
                              {item.questions.map((q) => {
                                const isDone = !!completed[q.id];
                                const isSaved = !!bookmarked[q.id];

                                return (
                                  <div
                                    key={q.id}
                                    className={`p-2.5 px-3 flex items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors ${
                                      isDone ? "bg-emerald-950/10" : ""
                                    }`}
                                  >
                                    <div className="flex items-center space-x-3 min-w-0">
                                      <button
                                        onClick={() => toggleCompleted(q.id)}
                                        className="text-zinc-600 hover:text-emerald-400 transition-colors shrink-0"
                                      >
                                        {isDone ? (
                                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                        ) : (
                                          <Circle className="w-4 h-4" />
                                        )}
                                      </button>
                                      
                                      <span
                                        className={`text-xs font-medium truncate ${
                                          isDone ? "line-through text-zinc-500" : "text-zinc-200"
                                        }`}
                                      >
                                        {q.name}
                                      </span>
                                    </div>

                                    <div className="flex items-center space-x-2.5 shrink-0">
                                      <span
                                        className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                                          q.difficulty === "Easy"
                                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                            : q.difficulty === "Medium"
                                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                            : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                        }`}
                                      >
                                        {q.difficulty}
                                      </span>

                                      <button
                                        onClick={() => toggleBookmarked(q.id)}
                                        className="p-1 text-zinc-600 hover:text-amber-400 transition-colors"
                                      >
                                        <Bookmark
                                          className={`w-3.5 h-3.5 ${
                                            isSaved
                                              ? "fill-amber-400 text-amber-400"
                                              : "text-zinc-600"
                                          }`}
                                        />
                                      </button>

                                      <a
                                        href={q.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-1 text-xs text-violet-300 hover:text-white bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 px-2 py-1 rounded transition-colors"
                                      >
                                        <span className="text-[11px] font-mono">Solve</span>
                                        <ArrowUpRight className="w-3 h-3" />
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

      {/* Production Dark Footer */}
      <footer className="border-t border-white/10 bg-zinc-950 py-6 text-xs text-zinc-400 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="font-medium text-zinc-300 flex items-center justify-center sm:justify-start gap-1.5 font-mono">
              Created by{" "}
              <a
                href="https://github.com/thapasubashb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 font-bold underline underline-offset-4 decoration-violet-500/40 transition-colors"
              >
                Subash
              </a>
            </p>
            <p className="text-zinc-500 text-[11px]">
              Complete 67 Data Structures & Algorithms Patterns Matrix
            </p>
          </div>

          <div className="flex items-center space-x-4 font-mono text-[11px]">
            <a
              href="https://github.com/thapasubashb/dsa-patterns-trackers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}