import Link from 'next/link'

export default function Footer() {
  const sections = [
    {
      title: 'Contact',
      items: [
        { label: 'Email', href: 'mailto:mattmazzega@gmail.com' },
        { label: 'Phone', href: 'tel:+1234567890' }
      ]
    },
    {
      title: 'Location',
      items: [
        { label: 'Office Address', href: '#' },
        { label: 'Virtual Sessions', href: '#' }
      ]
    },
    {
      title: 'Hours',
      items: [
        { label: 'Monday-Friday', href: '#' },
        { label: '9am-6pm', href: '#' }
      ]
    },
    {
      title: 'Follow',
      items: [
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' }
      ]
    }
  ]

  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-heading font-medium">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link 
                      href={item.href}
                      className="text-mutedForeground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-mutedForeground">
            <p>&copy; {new Date().getFullYear()} Sarah Johnson Therapy. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}