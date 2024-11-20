export type IconsCategoriesType = { identifier: string, name: string }

export type AvailableIconsType = {
  icon_id: number,
  tags: string[],
  raster_sizes: [
    {
      formats: [
        {
          format: string,
          preview_url: string
        }
      ]
    }
  ]
}