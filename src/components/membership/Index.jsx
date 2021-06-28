import React from 'react';
import { NavLink } from 'react-router-dom'
import { Steps } from 'antd';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
import Header from './components/Header';
import BasicInfo from './components/BasicInfo';
import ProductPricing from './components/ProductPricing';
import PagesMember from './components/PagesMember';
import Checkout from './components/Checkout';
import PostSale from './components/PostSale';
import Affiliate from './components/Affiliate';

const { Step } = Steps;

const steps = [
  {
    title: 'Basic Info',
    content: <BasicInfo />,
    key: 0,
  },
  {
    title: 'Pricing',
    content: <ProductPricing />,
    key: 1,
  },
  {
    title: 'Pages',
    content: <PagesMember />,
    key: 2,
  },
  {
    title: 'Checkout',
    content: <Checkout />,
    key: 3,
  },
  {
    title: 'Post Sale',
    content: <PostSale />,
    key: 4,
  },
  {
    title: 'Affiliates',
    content: <Affiliate />,
    key: 5,
  },
  {
    title: 'Finish',
    content: 'Last-content',
    key: 6,
  },
];

const useStyles = makeStyles(() => ({
  linkFont: {
    fontSize: '0.875rem',
    '& a': {
      color: '#75849B',
    }
  },
}));

const Membership = () => {
  const classes = useStyles();
  const [current, setCurrent] = React.useState(0);

  const onChange = current => {
    setCurrent(current);
  };


  return (
    <div className='container'>
      <Header />
      <div className='p-1'>
        <h2>My Products</h2>
        <Breadcrumbs className={classes.linkFont} separator='>' aria-label="breadcrumb">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink color="inherit" to="/">
            My products
          </NavLink>
          <Typography color="textPrimary">create products</Typography>
        </Breadcrumbs>
      </div>
      <div className='subContainer'>
        <div className='stepStyle'>
          <Steps current={current} direction='vertical' onChange={onChange} size='small'> 
            {steps.map(item => (
              <Step 
                key={item.key} 
                title={item.title} />
            ))}
          </Steps>
        </div>
        <div className="steps-content">{steps[current].content}</div>
      </div>
    </div>
  );
}

export default Membership