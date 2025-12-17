export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>Email: mattmazzega@gmail.com</li>
              <li>[Phone number]</li>
              <li>[Office address]</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Hours</h3>
            <p>Available Monday-Friday</p>
            <p>9am-6pm</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Follow</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Sarah Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}