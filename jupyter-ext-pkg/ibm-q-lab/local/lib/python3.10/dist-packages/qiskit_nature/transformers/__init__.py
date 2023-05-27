# This code is part of Qiskit.
#
# (C) Copyright IBM 2021, 2022.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

"""
Transformers (:mod:`qiskit_nature.transformers`)
================================================

.. currentmodule:: qiskit_nature.transformers

.. autosummary::
   :toctree:

   second_quantization
"""

from ..deprecation import warn_deprecated, DeprecatedType, NatureDeprecationWarning

warn_deprecated(
    "0.5.0",
    old_type=DeprecatedType.PACKAGE,
    old_name="qiskit_nature.transformers",
    new_type=DeprecatedType.PACKAGE,
    new_name="qiskit_nature.second_q.transformers",
    stack_level=3,
    category=NatureDeprecationWarning,
)