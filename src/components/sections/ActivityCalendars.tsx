"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ActivityCalendar, ThemeInput } from "react-activity-calendar";

const explicitTheme: ThemeInput = {
  light: ['#27272a', '#1e3a5f', '#2a5a8f', '#357abd', '#458fff'], // Not used but required
  dark: ['#18181b', '#1e3a5f', '#2a5a8f', '#357abd', '#458fff'],
};

interface ActivityCalendarsProps {
  githubUsername: string;
  leetcodeUsername: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  leetcodeData: any[];
}

export default function ActivityCalendars({ githubUsername, leetcodeUsername, leetcodeData }: ActivityCalendarsProps) {
  const [mounted, setMounted] = useState(false);
  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(4);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setBlockSize(8);
        setBlockMargin(3);
      } else if (window.innerWidth < 640) {
        setBlockSize(10);
        setBlockMargin(3);
      } else {
        setBlockSize(12);
        setBlockMargin(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transformGithubData = (contributions: any[]) => {
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return contributions.filter((day: any) => new Date(day.date) >= sixMonthsAgo);
  };

  if (!mounted) {
    return (
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        <div className="h-[250px] border-2 border-border bg-surface flex items-center justify-center font-mono text-sm text-text-3">INITIALIZING TRACKERS...</div>
        <div className="h-[250px] border-2 border-border bg-surface flex items-center justify-center font-mono text-sm text-text-3">INITIALIZING TRACKERS...</div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
      {/* GitHub Activity */}
      <div className="border-2 border-border bg-surface p-4 sm:p-6 md:p-8 hover:border-accent transition-colors group">
        <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-text-1 mb-6 md:mb-8 pb-4 border-b-2 border-border flex flex-col sm:flex-row sm:justify-between gap-2">
          <span>GitHub Commit Log</span>
          <span className="text-accent truncate">{"// "}{githubUsername}</span>
        </h4>
        <div className="overflow-x-auto pb-4 custom-scrollbar flex justify-start sm:justify-center">
          <div className="min-w-max pr-4">
            <GitHubCalendar
              username={githubUsername}
              colorScheme="dark"
              theme={explicitTheme}
              blockSize={blockSize}
              blockMargin={blockMargin}
              fontSize={12}
              transformData={transformGithubData}
              labels={{
                totalCount: `{{count}} contributions in the last 6 months`,
              }}
            />
          </div>
        </div>
      </div>

      {/* LeetCode Activity */}
      <div className="border-2 border-border bg-surface p-4 sm:p-6 md:p-8 hover:border-accent transition-colors group">
        <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-text-1 mb-6 md:mb-8 pb-4 border-b-2 border-border flex flex-col sm:flex-row sm:justify-between gap-2">
          <span>LeetCode Submissions</span>
          <span className="text-accent truncate">{"// "}{leetcodeUsername}</span>
        </h4>
        <div className="overflow-x-auto pb-4 custom-scrollbar flex justify-start sm:justify-center">
          <div className="min-w-max pr-4">
            {leetcodeData.length > 0 ? (
              <ActivityCalendar
                data={leetcodeData}
                colorScheme="dark"
                theme={explicitTheme}
                blockSize={blockSize}
                blockMargin={blockMargin}
                fontSize={12}
                labels={{
                  totalCount: `{{count}} submissions in the last 6 months`,
                }}
              />
            ) : (
              <div className="h-[120px] flex items-center justify-center font-mono text-sm text-text-3 border-2 border-dashed border-border p-4">
                [NO DATA RECEIVED OR API TIMEOUT]
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
