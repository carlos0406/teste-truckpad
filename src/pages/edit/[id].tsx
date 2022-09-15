import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Driver } from "../../@types/Driver";
import Form from "../../components/form";
import { api } from "../../services/api";

export default function Edit() {
  const [driver, setDriver] = useState<null | Driver>(null)

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
      )
    }
  }, [])
  if (driver == null) {
    return <></>
  }

  return <Form id={Number(id)} driver={driver} />
}
