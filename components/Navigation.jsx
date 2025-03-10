export default function Navigation({ options, currentPath }) {
    // Clone1 has a hidden console.log that reveals a path
    // This is one way users can discover the secret
    if (process.browser && window.location.pathname.includes('clone1')) {
      console.log('Dev hint: Check section "secret-chamber" for a surprise');
    }
    
    return (
      <div className="navigation">
        {options.map(option => (
          <Link href={`/${currentPath}/${option}`} key={option}>
            <a className="nav-button">{option}</a>
          </Link>
        ))}
      </div>
    )
  }