export default function (rol, rolesPermitidos) {
  return rolesPermitidos.includes(rol);
}

/**
 * Para ver si renderizo la opcion de Registro empresa, si la empresa ya esta registrada no deberia verla
 * pero si es rol admin, siempre va a poder verla.
 */
export function debeRenderizarRegistroDeEmpresa(rol, empresaRegistrada) {
  let noEsEmpresaNiEstaRegistrada = !(rol == 'empresa' && empresaRegistrada);
  return noEsEmpresaNiEstaRegistrada;
}

/**
 * Para ver si renderizo la opcion de publicar oferta. Si la empresa no esta registrada no deberia verse
 * pero si es admin siempre deberia renderizarse
 */
export function debeRenderizarPublicarOferta(rol, empresaRegistrada) {
  let esEmpresaYEstaRegistrada = rol == 'empresa' && empresaRegistrada;
  return esEmpresaYEstaRegistrada || rol == 'admin';
}

export const roles = {
  adminYEmpresa: ['admin', 'empresa'],
  empresa: ['empresa'],
  admin: ['admin'],
};
