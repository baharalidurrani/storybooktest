import React from 'react';
import { action } from '@storybook/addon-actions';
import styles from './Checkbox.module.scss';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const normal = () => (
  <div className={styles.normalCheck}>
    <p>Normal</p>
    <Checkbox label='Checkbox' onChange={action('changed')} />
  </div>
);

export const Active = () => (
  <div className={styles.normalCheck}>
    <p>Active</p>
    <Checkbox label='Checkbox' defaultValue onChange={action('changed')} />
  </div>
);

export const Hover = () => (
  <div className={styles.normalCheck}>
    <p>Hover</p>
    <Checkbox label='Checkbox' onChange={action('changed')} />
  </div>
);

export const Disabled = () => (
  <div className={styles.normalCheck}>
    <p>Disable</p>
    <Checkbox label='Checkbox' disabled />
  </div>
);

export const Focus = () => (
  <div className={styles.normalCheck}>
    <p>Focus</p>
    <Checkbox label='Checkbox' onChange={action('changed')} />
  </div>  
);
