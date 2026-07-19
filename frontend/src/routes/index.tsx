import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Complaint Management System" },
      {
        name: "description",
        content:
          "Smart City portal for citizens and administrators to report, track and resolve civic complaints.",
      },
      { property: "og:title", content: "Smart Complaint Management System" },
      {
        property: "og:description",
        content: "Smart City portal for citizens and administrators to report, track and resolve civic complaints.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/app/login.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <a
        href="/app/login.html"
        className="text-primary underline text-sm"
      >
        Open Smart Complaint System →
      </a>
    </div>
  );
}
