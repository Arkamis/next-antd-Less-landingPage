import { Statistic, Card, Typography, Tag } from 'antd';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputNumber, Button, Checkbox } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import QueueAnim from 'rc-queue-anim';

TweenOne.plugins.push(Children);

// function Statitics() {
//   const [active, setActive] = useState(12000);
//   const [animation, setAnimation] = useState(null); 
//   const onClick = () => {
//     console.log('Animation/:', animation)
//     const value = active;
//     setAnimation({
//       animation: {
//         Children: { 
//           value: typeof value === 'number' ? value : parseInt(active),
//           formatMoney:false,
//           floatLength: 0,
//         }, 
//         duration: 1000,
//       }
//     })
//   }
//     const activeSetter = () => {
//       setTimeout(() => {
//         setActive(e => e + Math.floor(Math.random() * 100) + 1);
//         const value = active;
//         console.log('Value:', value);
//         setAnimation({
//           animation: {
//             Children: {
//               value: typeof value === 'number' ? 15000 : parseInt(active),
//               formatMoney: false,
//               floatLength: 0,
//             },
//             duration: 1000,
//           }
//         });
//           activeSetter();
//           // onClick();
//         }, 10600)
//     }
//     useEffect(() => {
//         activeSetter();
//     }, [])
//     return(
    // <>
    //     <Card style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
    //       <Tag color="geekblue">
    //         <TweenOne
    //           animation={animation}
    //           style={{ fontSize: 56, marginBottom: 12 }}
    //         >
    //           0
    //         </TweenOne>
    //       </Tag>
    //       <Button
    //         type="primary"
    //         style={{ marginBottom: 32 }}
    //         onClick={onClick}
    //       >
    //         Start
    //       </Button>
    //     </Card>
    // </>
//     )
// }
class Static extends React.Component {
  intervalId = 0;
  constructor(props) {
    super(props);
    this.state = {
      value: 10000,
      animation: null,
      formatMoney: true,
    };
  }
  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      const { value, formatMoney } = this.state;
      console.log('Value tomado:', value)
      this.setState({
        value: value + Math.floor(Math.random() * 100) + 1,
        animation: {
          Children: { 
            value: typeof value === 'number' ? value : 10000, floatLength: 0,
            formatMoney
          }, 
          duration: 1000,
        }
      })
    }, 5000)
  }
  componentWillUnmount = () => {
    clearInterval(this.intervalId)
  }

  // onChangeMoney = (e) => {
  //   this.setState({
  //     formatMoney: e.target.checked
  //   })
  // }

  onClick = () => {
    const { value, formatMoney } = this.state;
    this.setState({
      animation: {
        Children: { 
          value: typeof value === 'number' ? value : 10000,floatLength: 2,
          formatMoney, 
        }, 
        duration: 1000,
      }
    })
  }

  onChange = (value) => {
    console.log(value)
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div 
        style={{ 
          display: 'flex', 
          height: '100%',
          minHeight: '220px', 
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        
        <div style={{ width: '100%' }}>
          
          <Card className="statics-card" bordered={false}>
              <QueueAnim delay={500} className="queue-simple">
              <div key="a" style={{ color: "#fff", fontFamily: "Tahoma", fontSize: 20 }}>Prestapp tiene un total de {" "}</div>
                <Tag key="b" color="geekblue">
                  <TweenOne
                    animation={this.state.animation}
                    style={{ fontSize: 28, marginBottom: 4, alignSelf:"center" }}
                  >
                    0
                  </TweenOne>
                </Tag>
              <div key="c" style={{ color: "#fff", fontFamily: "Tahoma", fontSize: 20 }}>{" "}créditos gestionados. Tu también empieza a crear los tuyos!.</div>
              </QueueAnim>
          </Card>
        </div>
      </div>
    );
  }
}
export default Static;

// Statitics.propTypes = {
//     value: PropTypes.number,
//   children: PropTypes.any,
//   className: PropTypes.string,
//   paused: PropTypes.bool,
// };