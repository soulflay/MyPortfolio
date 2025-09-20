import * as Sentry from "@sentry/nextjs";

export default function FeedbackButton() {
  return (
    <button
      onClick={() => Sentry.showReportDialog()}
      className="p-2 bg-blue-500 text-white rounded"
    >
      Send Feedback
    </button>
  );
}