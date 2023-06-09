# generated by datamodel-codegen:
#   filename:  geomCircle.json
#   timestamp: 2023-06-29T13:06:33+00:00

from __future__ import annotations

from pydantic import BaseModel, Extra, Field


class IGeomCircle(BaseModel):
    class Config:
        extra = Extra.forbid

    TypeId: str = Field('Part::GeomCircle', const=True, description='Geometry type')
    CenterX: float = Field(..., description='CenterX')
    CenterY: float = Field(..., description='CenterY')
    CenterZ: float = Field(..., description='CenterZ')
    NormalX: float = Field(..., description='NormalX')
    NormalY: float = Field(..., description='NormalY')
    NormalZ: float = Field(..., description='NormalZ')
    AngleXU: float = Field(..., description='AngleXU')
    Radius: float = Field(..., description='Radius')
