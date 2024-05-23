import NavbarItem from '../components/NavbarItem';

function Navbar() {
  return(
    <div class='flex justify-center gap-4 bg-amber-500 p-4 lg:text-lgr'>
      <NavbarItem title='Trending' param="fetch" />
      <NavbarItem title='Top Rated' param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
