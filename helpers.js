const helpers = {
  nav() {
    return `
      <a href='/'>Home</a> | 
      <a href='/about'>About</a> | 
      <a href='/contact'>Contact</a> | 
      <a href='/news'>News</a>
    `;
  },
  form() {
    return `
      <form method='post' action='/contact'>
        Name: <input type='text' name='name' /><br>
        Email: <input type='email' name='email' /><br>
        <input type='submit' name='submit' value='Submit' />
      </form>
    `;
  },
  renderNews(articles) {
    const list = articles.map(item => {
      return `<li><b>${item.title}</b> ~ ${item.author || 'No author'}<hr></li>`;
    }).join('');
    return `<ul>${list}</ul>`;
  }
}

module.exports = helpers;