import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { removeFoodMenu } from "../../../utils/apiCalling"

const DeleteFood = () => {
    const [menuId, setMenuId] = useState(1)

    const onClicDelete = async () => {
        try {
            const response = await removeFoodMenu({ id: menuId })
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <Stack>
            <Stack flexDirection={'row'} gap={2} justifyContent={'space-evenly'}>
                <TextField type="number" value={menuId} onChange={(e) => e.target.value >= 0 ? setMenuId(e.target.value) : ""} />
                <Button variant="contained" color="error" disabled={!menuId} sx={{ maxWidth: 100, }} onClick={onClicDelete}>Remove</Button>
            </Stack>
        </Stack>
    )
}

export default DeleteFood