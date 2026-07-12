import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function Waitlist() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    club: "",
    reason: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      await addDoc(collection(db, "waitlist"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setForm({ name: "", email: "", country: "", club: "", reason: "" });
    } catch (err) {
      console.error("Waitlist submit failed:", err);
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Join the Waitlist</h2>
        <p className="text-gray-400 mb-8">
          Be first to know when PitchSide launches.
        </p>

        {status === "success" ? (
          <div className="bg-green-900/30 border border-green-600 rounded-lg p-6">
            <p className="text-green-400 font-semibold">You're on the list!</p>
            <a
              href="https://whatsapp.com/channel/0029VbDNFOq3bbV1sWD6Rr3u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Join our WhatsApp Channel
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white"
            />
            <input
              type="text"
              name="club"
              placeholder="Club you support"
              value={form.club}
              onChange={handleChange}
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white"
            />
            <textarea
              name="reason"
              placeholder="Why are you really interested in PitchSide?"
              value={form.reason}
              onChange={handleChange}
              rows={3}
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-200 transition disabled:opacity-50"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
            {status === "error" && (
              <p className="text-red-500 text-sm">
                Please fill in your name and email, or try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

export default Waitlist;
