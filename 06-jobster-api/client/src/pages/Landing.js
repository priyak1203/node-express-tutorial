import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking </span> app
          </h1>
          <p>
            Photo booth gluten-free typewriter squid ascot. Fixie jianbing
            affogato tonx, wayfarers bespoke yuccie photo booth vape tote bag
            messenger bag narwhal. Pickled neutra everyday carry, brunch
            chicharrones food truck.
          </p>
          <button className="btn btn-hero">login/register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
