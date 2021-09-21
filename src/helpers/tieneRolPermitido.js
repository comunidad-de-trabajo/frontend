export default function (rol, rolesPermitidos) {
  return rolesPermitidos.includes(rol);
}

export const roles = {
  adminYEmpresa: ['admin', 'empresa'],
  empresa: ['empresa'],
  admin: ['admin'],
};
