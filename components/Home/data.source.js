import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header0-logo khibi3ktair-editor_css",
    children: "https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg",
  },
  Menu: {
    className: "header0-menu",
    children: [
      {
        name: "item0",
        className: "header0-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <p>
                    Inicio<br />
                  </p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item1",
        className: "header0-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <p>
                    Servicios
                    <br />
                  </p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item2",
        className: "header0-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  Conocenos
                  <br />
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item3",
        className: "header0-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>Suscribete</p>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: "header0-mobile-menu" },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: (
      <span>
        <span>
          <span>
            <p>
              Prestapp <br />
            </p>
            <p>
              Gestor de deudas.<br />
            </p>
            <p>
              <br />
            </p>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>Gestiona tus deudas donde sea.</p>
        <p>
          <br />
        </p>
      </span>
    ),
  },
  button: {
    className: 'banner0-button',
    children: (
      <span>
        <p>
          Conocer más<br />
        </p>
      </span>
    ),
    href: '',
    target: '',
    type: 'primary',
  },
};
export const Content10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: (
      <ImageCard src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png" />
    ),
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: {
    className: "content1-title",
    children: (
      <span>
        <p>¿Quienes somos?</p>
      </span>
    ),
  },
  content: {
    className: "content1-content",
    children: (
      <span>
        <p>
          Somos un grupo de estudiantes cuyo objetivo es impulsar el
          emprendedurismo brindando una herramienta de gestión para jovenes
          emprendedores, o empresas medias y pequeñas ya establecidas. <br />
        </p>
        <p>
          Prestapp es un sistema de gestión de créditos electrónicos
          automatizado. Brinda una mejor&nbsp; mayor organización y un mejor
          manejo de transacciones. Esta aplicación tiene un énfasis en el manejo
          de clientes, es decir, que se enfoca en crear una cartera de clientes
          donde puedes llevar un control de los mismos. Automatizando el resto
          por ti, y brindandote un analisis financiero.
          <br />
        </p>
      </span>
    ),
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Servicios</p>
            <p>
              <br />
            </p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Gestión</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    Gracias al diseño intuitivo de prestapp puedes organizar y
                    gestionar muy fácil y rápido tus créditos generados.<br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>
                    Analisis Financiero<br />
                  </p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>
                      Una vez tengas completa la información de tus créditos
                      generados, prestapp te ofrece la opción de generar
                      analisis entorno a&nbsp; esos créditos otorgados.
                      Encargandote solamente de gestionar y tomar decisiones
                      como el jefe que eres.<br />
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Automatización</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    Prestapp provee opciones para automatizar tu gestión de
                    créditos. Enfocaté nada más en agregar los créditos y
                    prestapp hará el resto.<br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>
              ¿Porqué prestapp?<br />
            </p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>
              existen gestores de deudas en la actualidad... Entonces, ¿Porqué
              elegir prestapp?<br />
            </p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>Visualización</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Prestapp tiene opciones multiplataforma para mostrar tu
                    información de deudas. <br />
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Investigación</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Realizamos una seríe de investigaciones para poder brindarte
                  una mejor guía de gestión financiera. Contamos con asesores de
                  gestión.<br />
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        Facturas o recibos<br />
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      En prestapp puedes dar facturas o recibos&nbsp; a tus
                      clientes si así lo desean.<br />
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>Futuro</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  En prestapp planeamos dedicarnos a brindar herramientas para
                  fácilitar la gestión de deudas.<br />
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <p>
                  ¿Te gustaría saber sobre actualizaciones?, Suscribete!<br />
                </p>
              </span>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <div>Dejanos tu correo para ponernos en contacto!</div>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <br />
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: {
      a: {
        className: 'button',
        href: '#',
        children: (
          <span>
            <p>Suscribirse</p>
          </span>
        ),
      },
    },
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <div>
          <span>
            ©2020 PRESTAPP All Rights Reserved. Generated with love by: Motion.
          </span>
        </div>
        <div>
          <p>
            <span>
              <br />
            </span>
          </p>
        </div>
        <div>
          <span />
        </div>
      </span>
    ),
  },
};
