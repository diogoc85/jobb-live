"use client";

import React from "react";
import contactsData from "../../config/contacts.json";

import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppButton() {
  return (
    <a
      href={contactsData.whatsappLink || "https://wa.me/"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
    >
      <WhatsappLogo className="w-8 h-8" weight="fill" />
    </a>
  );
}
