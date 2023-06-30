# generated by datamodel-codegen:
#   filename:  geomLineSegment.json
#   timestamp: 2023-06-29T13:06:33+00:00

from __future__ import annotations

from pydantic import BaseModel, Extra, Field


class IGeomLineSegment(BaseModel):
    class Config:
        extra = Extra.forbid

    TypeId: str = Field(
        'Part::GeomLineSegment', const=True, description='Geometry type'
    )
    StartX: float = Field(..., description='StartX')
    StartY: float = Field(..., description='StartY')
    StartZ: float = Field(..., description='StartZ')
    EndX: float = Field(..., description='EndX')
    EndY: float = Field(..., description='EndY')
    EndZ: float = Field(..., description='EndZ')
