import { styled } from '~/styled-system/jsx'

const Button = styled.button`
  display: block;
  margin-top: 16px;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 16px;
  color: #000;
  line-height: 34px;
`

const MoreInfo = () => {
  return <Button>Plus d&apos;info</Button>
}

export default MoreInfo
