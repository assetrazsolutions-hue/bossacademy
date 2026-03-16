import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919916800685"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <div className="absolute right-14 bottom-1 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
            Chat with us on WhatsApp
          </span>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-transform duration-200 group-hover:scale-105">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        </div>
      </div>
    </a>
  )
}

