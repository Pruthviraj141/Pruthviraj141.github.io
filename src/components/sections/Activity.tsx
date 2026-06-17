import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";
import ActivityCalendars from "./ActivityCalendars";
import { candidate } from "@/lib/data";

async function getLeetCodeData(username: string) {
  try {
    // Note: Revalidate every 24 hours (86400 seconds) for a "daily refresh"
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`, {
      next: { revalidate: 86400 }
    });

    if (!res.ok) throw new Error('Failed to fetch LeetCode data');
    const data = await res.json();

    if (!data.submissionCalendar || data.submissionCalendar === "null") {
      return [];
    }

    const submissions: Record<string, number> = JSON.parse(data.submissionCalendar);

    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    const countMap = new Map<string, number>();
    for (const [timestamp, count] of Object.entries(submissions)) {
      const date = new Date(parseInt(timestamp) * 1000);
      const dateStr = date.toISOString().split('T')[0];
      countMap.set(dateStr, count);
    }

    const days = [];

    // Generate exactly 6 months of data
    for (let d = new Date(sixMonthsAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      const count = countMap.get(dateStr) || 0;

      let level = 0;
      if (count > 0 && count <= 2) level = 1;
      else if (count > 2 && count <= 4) level = 2;
      else if (count > 4 && count <= 6) level = 3;
      else if (count > 6) level = 4;

      days.push({
        date: dateStr,
        count,
        level: level as 0 | 1 | 2 | 3 | 4
      });
    }

    return days;

  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return [];
  }
}

export default async function Activity() {
  const githubUsername = candidate.github.split("/").pop() || "Pruthviraj141";
  const leetcodeUsername = candidate.leetcode.split("/u/")[1]?.replace("/", "") || "pruthvigavhane";

  const leetcodeData = await getLeetCodeData(leetcodeUsername);

  return (
    <section id="activity" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b-2 border-border bg-black" aria-labelledby="activity-heading">
      <FadeIn>
        <SectionHeader title="Activity" eyebrow="sys.metrics" />
        <ActivityCalendars
          githubUsername={githubUsername}
          leetcodeUsername={leetcodeUsername}
          leetcodeData={leetcodeData}
        />
      </FadeIn>
    </section>
  );
}

