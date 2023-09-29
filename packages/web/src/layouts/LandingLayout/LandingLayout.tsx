import './LandingLayout.css'
import { Children } from '#/types'

export interface ILandingLayoutProps {
  children?: Children
}

export const LandingLayout = ({ children }: ILandingLayoutProps) => {
  return (
    <div>
      <h1>Landing</h1>
      <div>{children}</div>
    </div>
  );
}
