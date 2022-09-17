import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Driver } from "../../@types/Driver";
import { Form } from "../../components/form";
import { api } from "../../services/api";
export default function Edit() {
  const [driver, setDriver] = useState<null | Driver>(null)
  const router = useRouter()
  let path = useRouter().asPath
  path = path.replace('/', '')
  const id = path.split('/')[1]
  useEffect(() => {
    if (id) {
      api.get(`api/drivers/${id}`).then(response => {
        const driver = response.data.driver
        const formatedDriver = {
          ...driver,
          birth_date: driver.birth_date.substring(0, 10),
          cnh_expires_at: driver.cnh_expires_at.substring(0, 10)
        }
        setDriver(formatedDriver)
      }
      ).catch(() => {
        toast.error('Erro ao entrar na tela de edição', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push('/')
      })
    }
  }, [])
  if (driver == null) {
    return <></>
  }

  return <Form id={Number(id)} driver={driver} />
}
