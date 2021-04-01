import { ListadoUsuariosDesconectado } from './ListadoUsuarios';

export default {
  title: 'Usuarios/ListadoUsuarios',
  component: ListadoUsuariosDesconectado,
};

const Template = (args) => <ListadoUsuariosDesconectado {...args} />;

export const ConElementos = Template.bind({});

ConElementos.args = {
  usuarios: [
    {
      id: 1,
      nombre: 'Federico',
      apellido: 'Aloi',
      fechaNacimiento: '1991-10-30',
    },
    {
      id: 2,
      nombre: 'Micaela',
      apellido: 'Sierra Bueno',
      fechaNacimiento: '1992-02-13',
    },
  ],
};

export const Vacia = Template.bind({});

Vacia.args = {
  usuarios: [],
};
