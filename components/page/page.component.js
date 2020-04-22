import React from 'react';
import useStyles from './page.style';

const Page = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.page}>
      {props.children}
    </div>
  );
}

export default Page;
