import type { FormEvent } from 'react';
import type { ModalType } from '../../types';

interface ModalProps {
  type: ModalType;
  onClose: () => void;
}

const FUNCTION_URL = import.meta.env.PROD
  ? 'https://us-central1-genai-472223.cloudfunctions.net/sendContactEmail'
  : 'http://127.0.0.1:5001/genai-472223/us-central1/sendContactEmail';

export function Modal({ type, onClose }: ModalProps) {
  if (!type) return null;

  const title = type === 'consultation'
    ? 'Book Your 15-Min Workflow Audit'
    : 'Request Risk + RAG Assessment';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = {
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      firm: (form.elements.namedItem('firm') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      type,
    };

    // Fire and forget - close immediately
    fetch(FUNCTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    onClose();
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
      <div
        className="absolute w-full h-full bg-slate-900 opacity-50"
        onClick={onClose}
      />
      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-2xl z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-slate-900">{title}</p>
            <button
              className="cursor-pointer z-50"
              onClick={onClose}
            >
              <span className="material-symbols-outlined text-slate-500">close</span>
            </button>
          </div>
          <div className="my-5">
            <p className="text-slate-600 mb-4 text-sm">
              Fill out the form below to get started. I will respond within 24 hours.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="email"
                  type="email"
                  placeholder="attorney@firm.com"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="firm">
                  Organization
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="firm"
                  type="text"
                  placeholder="Law Firm or VSO Name"
                />
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="message"
                  rows={3}
                  placeholder="Briefly describe your current workflow needs..."
                  required
                />
              </div>
              <div className="flex justify-end pt-2">
                <button
                  className="font-bold py-2 px-4 rounded focus:outline-none w-full transition bg-blue-900 hover:bg-blue-800 text-white"
                  type="submit"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
