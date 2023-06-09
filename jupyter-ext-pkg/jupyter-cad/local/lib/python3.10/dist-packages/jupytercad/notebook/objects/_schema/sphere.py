# generated by datamodel-codegen:
#   filename:  sphere.json
#   timestamp: 2023-06-29T13:06:33+00:00

from __future__ import annotations

from pydantic import BaseModel, Extra, Field

from . import placement


class ISphere(BaseModel):
    class Config:
        extra = Extra.forbid

    Radius: float = Field(..., description='The radius of the sphere')
    Angle1: float = Field(..., description='The angle of the sphere')
    Angle2: float = Field(..., description='The angle of the sphere')
    Angle3: float = Field(..., description='The angle of the sphere')
    Placement: placement.Model
