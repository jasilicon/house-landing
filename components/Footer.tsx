export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold">
          Bright &amp; Clean
        </div>
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Bright &amp; Clean Home Services. All rights reserved.
        </div>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}