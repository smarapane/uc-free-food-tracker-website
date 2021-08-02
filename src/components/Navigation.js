import Header from './Header.js';
import Button from './Button.js';

function Navigation() {
  return (
    <div class="Navigation">
      <head>
        <title>UC Free Food Tracker</title>
      </head>
      <Header/>
      <Button action="Create post" route="/CreatePost"/>
      <Button action="View posts" route="/ViewPost"/>
      <Button action="Delete post" route="DeletePost"/>
    </div>
  );
}

export default Navigation;
