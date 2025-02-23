'use client';

import * as React from 'react';
import { createContext, useContext } from 'react';

// if color is null, then is not applied to style attribute
type Props = {
  color: string | null;
  children: React.ReactNode;
};

type PropertyParagraphContextType = {
  color: string | null;
};

const PropertyParagraphContext = createContext<PropertyParagraphContextType>({
  color: null,
});

const PropertyParagraphContextProvider: React.FC<Props> = ({
  color,
  children,
}): React.ReactElement => (
  <PropertyParagraphContext.Provider value={{ color }}>
    {children}
  </PropertyParagraphContext.Provider>
);

const usePropertyParagraphContext = (): PropertyParagraphContextType =>
  useContext(PropertyParagraphContext);

export { PropertyParagraphContextProvider, usePropertyParagraphContext };
