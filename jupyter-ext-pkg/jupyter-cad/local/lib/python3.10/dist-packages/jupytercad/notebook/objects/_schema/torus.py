# generated by datamodel-codegen:
#   filename:  torus.json
#   timestamp: 2023-06-29T13:06:33+00:00

from __future__ import annotations

from pydantic import BaseModel, Extra, Field

from . import placement


class ITorus(BaseModel):
    class Config:
        extra = Extra.forbid

    Radius1: float = Field(..., description='The radius of the torus')
    Radius2: float = Field(..., description='The radius of the torus')
    Angle1: float = Field(..., description='The angle of the torus')
    Angle2: float = Field(..., description='The angle of the torus')
    Angle3: float = Field(..., description='The angle of the torus')
    Placement: placement.Model
