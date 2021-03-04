import { Dropdown, Flex, Header } from "@primer/components";
import DropdownMenu from "./../DropdownMenu/DropdownMenu";
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom'

const navigation = [
  {
    label: 'Açık Kaynak',
    to: '#',
    items: [
      { label: 'Vitrin', to: '#' },
      { label: 'İstatistik', to: '#' },
      { label: 'Sponsorlar', to: '#' },
      { label: 'Hakkımızda', to: '#' },
    ]
  },
  {
    label: 'Rehber',
    to: '#',
    items: [
      { label: 'Haberler', to: '#' },
      { label: 'Etkinlikler', to: '#' },
      { label: 'Projeler', to: '#' },
      { label: 'Kaynaklar', to: '#' },
    ]
  },
  {
    label: 'Üniversite',
    to: '#',
    items: [
      { label: 'Program Detayı', to: '#' },
      { label: 'Katıl', to: '#' },
      { label: 'Mezunlarımız', to: '#' }
    ]
  },
  {
    label: 'Topluluk',
    to: '#',
    items: [
      { label: 'Öğrenci Kulüpleri', to: '#' },
      { label: 'Online Topluluklarımız', to: '#' },
      { label: 'Bağış Havuzu', to: '#' }
    ]
  }
]

function SiteHeader() {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="#" fontSize={2}>
          <Logo width="100px" height='32px'/>
        </Header.Link>
      </Header.Item>
      {
        navigation.map(item => (
          <DropdownMenu>
            <DropdownMenu.Summary>
              <Header.Item>
                <Header.Link href="#">
                  {item.label}
                </Header.Link>
              </Header.Item>
            </DropdownMenu.Summary>
            {item.items && <DropdownMenu.Content>
              {item.items.map(({label, to}) => (
                <DropdownMenu.Item to={to}>{label}</DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>}
          </DropdownMenu>
        ))
      }
      <Header.Item full></Header.Item>
      <Header.Item mr={0}>
        <Header.Link href="#">GitHub ile Oturum Aç</Header.Link>
      </Header.Item>
    </Header>
  );
}

export { SiteHeader as default };
