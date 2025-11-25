import { WithChildren } from '@shared/types';

export const PageWrapper = ({ children }: WithChildren) => {
  return <div className="p-4">{children}</div>;
};
