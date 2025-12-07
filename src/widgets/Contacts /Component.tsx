"use client";

import { ContactData } from "@/pages-data/contact";

export const Contacts = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto w-full p-5 pt-16 pb-20">
      <h2 className="text-3xl font-bold mb-6">Contacts</h2>

      {/* Contacts List */}
      <div className="flex flex-col gap-4 text-neutral-300 mb-10">
        <div>
          <span className="text-neutral-500 text-sm">Email</span>
          <p className="text-lg">
            <a
              href={`mailto:${ContactData.email}`}
              className="hover:underline"
            >
              {ContactData.email}
            </a>
          </p>
        </div>

        <div>
          <span className="text-neutral-500 text-sm">GitHub</span>
          <p className="text-lg">
            <a
              href={ContactData.github}
              target="_blank"
              className="hover:underline"
            >
              {ContactData.github}
            </a>
          </p>
        </div>

        {ContactData.telegram && (
          <div>
            <span className="text-neutral-500 text-sm">Telegram</span>
            <p className="text-lg">
              <a
                href={ContactData.telegram}
                target="_blank"
                className="hover:underline"
              >
                {ContactData.telegram}
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Form */}
      <div className="max-w-md">
        <h3 className="text-xl font-semibold mb-4">
          {ContactData.messageTitle}
        </h3>

        <form className="flex flex-col gap-4">
          <textarea
            placeholder={ContactData.messagePlaceholder}
            className="w-full h-32 p-3 bg-neutral-900 border border-neutral-700 rounded-md resize-none"
          />

          <button
            type="submit"
            className="px-5 py-2 bg-neutral-800 border border-neutral-700 rounded-md hover:bg-neutral-700 transition text-sm"
          >
            {ContactData.cta}
          </button>
        </form>
      </div>
    </section>
  );
};
