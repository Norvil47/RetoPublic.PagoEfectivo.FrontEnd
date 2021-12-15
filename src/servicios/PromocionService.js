import Api from "@/api/ApiConfig.js";

export async function fnListarPromociones(fn) {
  const resp = await Api.get("/Promocion");
  fn(resp.data);
}

export async function fnCrearPromocion(email, nombre, fn,fnError) {
  const resp = await Api.post("/Promocion/GenerarCodigo", {
    email,
    nombre,
  }).catch((err) => (fnError( err?.response?.data)));

  if (resp) fn(resp.data)
}

export async function fnCanjearPromocion(codigo, fn,fnError) {
  const resp = await Api.post("/Promocion/CanjeraCodigo", {
    codigo
  }).catch((err) => (fnError( err?.response?.data)));

  if (resp) fn(resp.data)
}
