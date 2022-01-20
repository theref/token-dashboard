import { FC, useEffect } from "react"
import { useParams, Outlet, useNavigate } from "react-router-dom"
import { Stack, HStack, Container } from "@chakra-ui/react"
import UpgradeCard from "../components/UpgradeCard"
import TokenBalanceCard from "../components/TokenBalanceCard"
import { useModal } from "../hooks/useModal"
import { UpgredableToken } from "../types"
import { ModalType, Token } from "../enums"
import SubNavigationPills from "../components/SubNavigationPills"

const subNavLinks = [
  {
    text: "KEEP to T",
    path: "keep",
  },
  { text: "NU to T", path: "nu" },
]

const UpgradePage: FC & { route: {} } = () => {
  return (
    <>
      <SubNavigationPills links={subNavLinks} />
      <Container maxW={{ base: "2xl", xl: "6xl" }} mt={16}>
        <Outlet />
      </Container>
    </>
  )
}

UpgradePage.route = {}

export const UpgradeTokenPage = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const _token = token === "nu" ? Token.Nu : Token.Keep
  const { openModal } = useModal()

  useEffect(() => {
    if (token !== "nu" && token !== "keep") {
      navigate("/upgrade/nu", { replace: true })
    }
  }, [token, navigate])

  const onSubmit = (amount: string | number, token: UpgredableToken) => {
    openModal(ModalType.UpgradeToT, {
      upgradedAmount: amount,
      token,
    })
  }

  return (
    <HStack w="100%" align="flex-start" spacing="1rem">
      <UpgradeCard token={_token} onSubmit={onSubmit} />
      <Stack w="50%" spacing="1rem">
        <TokenBalanceCard token={_token} />
        <TokenBalanceCard token={Token.T} />
      </Stack>
    </HStack>
  )
}

export default UpgradePage
