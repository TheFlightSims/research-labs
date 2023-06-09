# generated by datamodel-codegen:
#   filename:  cylinder.json
#   timestamp: 2023-06-29T13:06:33+00:00

from __future__ import annotations

from pydantic import BaseModel, Extra, Field

from . import placement


class ICylinder(BaseModel):
    class Config:
        extra = Extra.forbid

    Radius: float = Field(..., description='Radius of the cylinder')
    Height: float = Field(..., description='Height of the cylinder')
    Angle: float = Field(..., description='Angle of the cylinder')
    Placement: placement.Model
