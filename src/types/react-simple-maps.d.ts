declare module "react-simple-maps" {
  import * as React from "react";
  export interface GeographyProps {
    geography: any;
  }
  export const ComposableMap: React.FC<React.ComponentPropsWithoutRef<"svg"> & { projectionConfig?: any }>;
  export const Geographies: React.FC<
    { geography: string | any } & { children: (props: { geographies: any[] }) => React.ReactNode }
  >;
  export const Geography: React.FC<GeographyProps & { style?: any }>;
  export const Marker: React.FC<{ coordinates: [number, number] } & React.SVGProps<SVGGElement>>;
  export const ZoomableGroup: (
    props: React.PropsWithChildren<{ center?: [number, number]; zoom?: number; minZoom?: number; maxZoom?: number }>
  ) => JSX.Element;
  export const Graticule: React.FC<{ stroke?: string; strokeWidth?: number; strokeOpacity?: number }>;
  export const Sphere: React.FC<{ fill?: string; stroke?: string; strokeWidth?: number }>;
}
