import styles from './RedirectIconsNav.module.scss';

const RedirectIconsNav = () => {
  return (
    <div className={styles.redirectIconsNavContainer}>
      <a rel="noreferrer" target="blank" href="www.linkedin.com/in/boyazhang1">
        <img src="linkedin-svgrepo-com.svg"></img>
      </a>
      <a rel="noreferrer" target="blank" href="https://github.com/boyazhang1">
        <img src="github-svgrepo-com.svg"></img>
      </a>
      <a rel="noreferrer" target="blank" href="mailto:b429zhang@uwaterloo.ca">
        <img src="email-svgrepo-com.svg"></img>
      </a>
    </div>
  );
};

export default RedirectIconsNav;
