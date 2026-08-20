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
  BookOpen
} from "lucide-react";

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
    if (window.confirm("Reset all problem completion states?")) {
      setCompleted({});
      setBookmarked({});
    }
  };

  // Extract all unique topic names for dropdown
  const uniqueTopics = useMemo(() => {
    return ["All", ...Array.from(new Set(DSA_PATTERNS_DATA.map((item) => item.topic)))];
  }, []);

  // Compute total problem count
  const allQuestions = useMemo(() => {
    const list = [];
    DSA_PATTERNS_DATA.forEach((p) => p.questions.forEach((q) => list.push(q)));
    return list;
  }, []);

  const totalCount = allQuestions.length;
  const doneCount = Object.values(completed).filter(Boolean).length;
  const progressPercent = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  // Filter dataset preserving Topic -> Pattern layout
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

  // Group filtered results by Topic
  const groupedData = useMemo(() => {
    const map = {};
    filteredData.forEach((item) => {
      if (!map[item.topic]) map[item.topic] = [];
      map[item.topic].push(item);
    });
    return map;
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-lg text-white">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                DSA 67 Patterns
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Exact Match
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Topic, Pattern, Sub-pattern & Triggers Engine
              </p>
            </div>
          </div>

          <button
            onClick={resetAll}
            className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-900/50 bg-slate-900 px-3 py-1.5 rounded-lg transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-20 space-y-8">
        {/* Progress Banner */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Mastery Completion Rate
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {doneCount} of {totalCount} Problems Solved
              </p>
            </div>
            <div className="text-3xl font-extrabold text-cyan-400 tracking-tight">
              {progressPercent}%
            </div>
          </div>

          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </section>

        {/* Filter Controls */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Bar */}
          <div className="relative sm:col-span-1 lg:col-span-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Search pattern or trigger..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>

          {/* Topic Selector */}
          <div className="relative">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500 appearance-none transition"
            >
              {uniqueTopics.map((t) => (
                <option key={t} value={t}>
                  Topic: {t}
                </option>
              ))}
            </select>
            <Filter className="w-4 h-4 absolute right-3.5 top-3 text-slate-500 pointer-events-none" />
          </div>

          {/* Difficulty Selector */}
          <div className="relative">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500 appearance-none transition"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3.5 top-3 text-slate-500 pointer-events-none" />
          </div>

          {/* Status Selector */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500 appearance-none transition"
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Incomplete">Incomplete</option>
              <option value="Bookmarked">Bookmarked</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3.5 top-3 text-slate-500 pointer-events-none" />
          </div>
        </section>

        {/* Dynamic Pattern Grouping by Topic */}
        <section className="space-y-6">
          {Object.keys(groupedData).length === 0 ? (
            <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-3">
              <BookOpen className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-slate-400 text-sm">No patterns found matching your search.</p>
            </div>
          ) : (
            Object.entries(groupedData).map(([topicName, patternItems]) => {
              const isCollapsed = !!collapsedTopics[topicName];

              return (
                <div
                  key={topicName}
                  className="border border-slate-800 bg-slate-900/40 rounded-2xl overflow-hidden shadow-md"
                >
                  {/* Topic Group Bar */}
                  <div
                    onClick={() => toggleTopicCollapse(topicName)}
                    className="p-4 sm:px-6 bg-slate-900/90 cursor-pointer flex items-center justify-between border-b border-slate-800 hover:bg-slate-800/60 transition select-none"
                  >
                    <div className="flex items-center space-x-3">
                      {isCollapsed ? (
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-cyan-400" />
                      )}
                      <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                        Topic: <span className="text-cyan-400">{topicName}</span>
                      </h2>
                    </div>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-400 font-mono">
                      {patternItems.length} {patternItems.length === 1 ? "Pattern" : "Patterns"}
                    </span>
                  </div>

                  {/* Topic Content */}
                  {!isCollapsed && (
                    <div className="p-4 sm:p-6 space-y-6">
                      {patternItems.map((item) => (
                        <div
                          key={item.id}
                          className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4"
                        >
                          {/* Pattern Details */}
                          <div className="space-y-2 border-b border-slate-800/80 pb-4">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-bold text-slate-500 font-mono">
                                  #{item.id}
                                </span>
                                <h3 className="text-sm sm:text-base font-bold text-white">
                                  Pattern: {item.pattern}
                                </h3>
                              </div>
                              <span className="text-xs bg-slate-800/90 border border-slate-700/60 px-3 py-1 rounded-md text-cyan-300 font-medium">
                                Sub-pattern: {item.subPattern}
                              </span>
                            </div>

                            {/* Trigger Highlight */}
                            <div className="flex items-start space-x-2.5 bg-cyan-950/20 border border-cyan-800/30 p-3 rounded-lg text-xs text-cyan-200/90 mt-2">
                              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold text-amber-400">Trigger: </span>
                                {item.trigger}
                              </div>
                            </div>
                          </div>

                          {/* Questions List */}
                          <div className="space-y-2">
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
                              Questions
                            </div>
                            <div className="divide-y divide-slate-800/80 border border-slate-800/80 rounded-lg overflow-hidden bg-slate-950/50">
                              {item.questions.map((q) => {
                                const isDone = !!completed[q.id];
                                const isSaved = !!bookmarked[q.id];

                                return (
                                  <div
                                    key={q.id}
                                    className={`p-3 sm:px-4 flex items-center justify-between gap-4 hover:bg-slate-800/30 transition ${
                                      isDone ? "bg-emerald-950/10 opacity-75" : ""
                                    }`}
                                  >
                                    <div className="flex items-center space-x-3 min-w-0">
                                      <button
                                        onClick={() => toggleCompleted(q.id)}
                                        className="text-slate-500 hover:text-emerald-400 transition shrink-0"
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
                                      <span
                                        className={`text-[10px] sm:text-xs px-2.5 py-0.5 rounded font-medium ${
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
                                        className="text-slate-500 hover:text-amber-400 transition"
                                      >
                                        <Bookmark
                                          className={`w-4 h-4 ${
                                            isSaved
                                              ? "fill-amber-400 text-amber-400"
                                              : "text-slate-600"
                                          }`}
                                        />
                                      </button>

                                      <a
                                        href={q.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-1 text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded transition"
                                      >
                                        <span>Solve</span>
                                        <ExternalLink className="w-3 h-3" />
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
    </div>
  );
}