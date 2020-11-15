import { Form, Input, Button, Checkbox, message, notification } from 'antd';
import TweenOne from 'rc-tween-one';
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

const Formulario = () => {
    const layout = {
      labelCol: {
        xs: { span: 10 },
        sm: { span: 8 },
    },
      wrapperCol: {
        xs: { span: 4 },
        sm: { span: 10 },
      },
    };
    const tailLayout = {
        wrapperCol: {
          xs: {
            span: 8,
            offset: 8,
          },
          sm: {
            span: 8,
            offset: 8,
          },
        },
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    notification.success({
      duration: 5,
      placement:"bottomLeft",
      description: "Gracias por suscribirte, te avisaremos cualquier actualización del prototipo.",
      message: "Te has Suscrito con Exito!"
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    

  return (
    <Form
      {...layout}
      layout="horizontal"
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        form={form}
        label="Correo Electronico"
        name="correo"
        rules={[
          {
            required: true,
                message: 'Porfavor ingresa un correo válido!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
         <TweenOne
          key="button"
          style={{ textAlign: 'center' }}
          animation={{ y: 30, opacity: 0, type: 'from', delay: 300 }}
          >
            <Button className="button"  htmlType="submit">
                Suscribirse
            </Button>
        </TweenOne>
      </Form.Item>
    </Form>
  );
};
export default Formulario;