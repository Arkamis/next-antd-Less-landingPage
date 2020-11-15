import React from 'react';
import { DownOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './utils';
import BannerTitle from '../TitleBanner/Statitics';
import Demo from '../TitleBanner/Banner02';
import Statitics from '../TitleBanner/Statitics';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
          <Demo/>
          </div>
          <div key="content" {...dataSource.content}>
            
            {/* {dataSource.content.children} */}
            <Statitics />
          </div>
          <Button ghost key="button" {...dataSource.button}>
            {dataSource.button.children}
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined/>
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
