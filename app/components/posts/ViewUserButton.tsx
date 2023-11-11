'use client'

interface ViewUserProps {
    userId: number
}

export const ViewUserButton: React.FC<ViewUserProps> = ({userId}) => {
    const handleClick = () => {
        alert(`user id : ${userId}`)
    }
    return(
        <>
        <button onClick={handleClick}>Lihat User</button>
        </>
    )
}