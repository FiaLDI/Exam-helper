"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useModalStore } from "../model/modalStore";
import { createPortalNode } from "../lib/createPortalNode";

export const ModalContainer = () => {
    const { open, content, closeModal } = useModalStore();

    const portalRef = useRef<ReturnType<typeof createPortalNode> | null>(null);

    useEffect(() => {
        if (!portalRef.current) {
            portalRef.current = createPortalNode();
        }

        return () => {
            portalRef.current?.remove();
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {document.body.style.overflow = ""};
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [open]);

    if (!open || !portalRef.current) return null;

    return createPortal(
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md
                       flex justify-center items-center z-50"
            onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
            }}
        >
            <div className="bg-gray-800 rounded-xl p-6 relative min-w-[300px] max-w-[80vw]">
                <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 hover:text-red-400"
                >
                    <X />
                </button>

                <div>{content}</div>
            </div>
        </div>,
        portalRef.current.node
    );
};
