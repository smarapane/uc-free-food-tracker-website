import Header from './Header.js';
import ButtonLink from './ButtonLink.js';

function Navigation() {
  return (
    <div class="Navigation">
      <head>
        <title>UC Free Food Tracker</title>
      </head>
      <Header/>
      <ButtonLink action="Delete post" route="/DeletePost"/>
      <ButtonLink action="View posts" route="/ViewPost"/>
      <ButtonLink action="Create post" route="/CreatePost"/>
    </div>
  );
}

export default Navigation;
