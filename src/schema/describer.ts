export const column = `
**GLOBAL EXTRACTION RULE**

Always look for a Bar Mark / Bar Schedule / Reinforcement Schedule / Bar Bending Schedule (BBS) table in the drawing.

When such a table is present, it is the primary and authoritative source for all bar-related information, including:

- Bar mark / position
- Diameter
- Quantity
- Cutting length
- Total bar length
- Total weight
- Any other information explicitly provided in the table

**SOURCE PRIORITY**

1. Bar Schedule / Bar Table
2. Bar-specific drawing annotations
3. Bending diagram / shape dimensions
4. Calculation or visual inference

If a value is available in the Bar Schedule/Table, ALWAYS use the value from the table, even if the same value appears elsewhere in the drawing.

NEVER calculate, infer, estimate, or visually count a value when that value is explicitly available in the Bar Schedule/Table.

For example:
- If the table gives Qty = 12, do not count bars from the drawing.
- If the table gives Length = 4500, do not calculate the length from A/B/C dimensions.
- If the table gives Total Length = 54000, do not calculate Qty × Length.
- If the table gives Weight, use that weight instead of calculating it.

Only use the bending drawing/detail for information that is not available in the Bar Schedule/Table, especially bending dimensions such as A, B, C, C1, C2, D, D1, D2, D3.

**FIELD-SPECIFIC RULES**

- bar_mark: Extract the bar mark/position from the corresponding Bar Mark / Mark / Position / Reference column of the Bar Schedule/Table. Do not derive it from the bending drawing.

- diameter: Extract the bar diameter from the corresponding Diameter / Bar Size / Dia. column of the Bar Schedule/Table. If the diameter appears elsewhere as well, use the table value.

- qty: Extract the quantity from the corresponding Quantity / Qty / No. column of the Bar Schedule/Table. Do not visually count bars from the drawing.

- length: Extract the bar cutting length from the corresponding Length / Cutting Length / Bar Length column of the Bar Schedule/Table. Do not calculate it from bending dimensions when the table provides the value.

- total_bar_length: Extract the total bar length from the corresponding Total Length / Total Bar Length column of the Bar Schedule/Table. If explicitly provided, do not calculate it using Qty × Length.

- total_weigth: Extract the total weight from the corresponding Weight / Total Weight column of the Bar Schedule/Table. If explicitly provided, do not calculate the weight.

- data: Extract bending dimensions such as A, B, C, C1, C2, D, D1, D2, D3 from the bending detail/shape associated with that bar. These dimensions may come from the bending diagram when they are not provided in the Bar Schedule/Table. If the item has no bending dimensions, such as sleeves, couplers, plates, etc., return an appropriate descriptive string.

**IMPORTANT**

The Bar Schedule/Table always takes precedence over information found elsewhere in the drawing.

Never substitute a calculated, inferred, estimated, or visually interpreted value for an explicitly provided value in the Bar Schedule/Table.
`;

export const plate = `
**GLOBAL EXTRACTION RULE**

Always look for a **Plate Table / Plate Schedule / Plate List / Connection Plate Schedule** in the drawing.

When a plate table is present, it is the **primary and authoritative source** for all plate-related information.

Always extract plate information from the **Plate Table** whenever the required value is available there.

The Plate Table takes priority over:
- Drawing annotations
- Plate detail drawings
- Dimension lines
- Section/detail views
- Visual estimation
- Calculated values

**IMPORTANT SOURCE PRIORITY**

1. Plate Table / Plate Schedule
2. Plate-specific drawing annotations
3. Plate detail / section drawings
4. Calculation or visual inference

If a value is available in the Plate Table, **ALWAYS use the value from the table**, even if the same value appears elsewhere in the drawing.

**NEVER calculate, infer, estimate, or visually interpret a value when that value is explicitly provided in the Plate Table.**

For example:
- If the Plate Table gives plate repetition = 6, use 6. Do not count plates visually.
- If the Plate Table gives a plate profile such as 12x200x200, use that value directly.
- If the Plate Table gives plate weight, use the table value instead of calculating the weight.
- If the Plate Table gives lug diameter, use the table value instead of measuring it from the drawing.
- If the Plate Table gives total lug length or total lug weight, use those values directly.

Only use the plate detail drawing when the required information is **not available in the Plate Table**.

**FIELD-SPECIFIC RULES**

- plate_name:
  Extract the plate name/mark/identifier from the corresponding **Plate Name / Plate Mark / Mark / Position / Reference** column of the Plate Table.
  Do not derive the plate name from the drawing detail unless it is not available in the table.
  Return null if the plate name is not available.

- plate_repetation:
  Extract the number of repeated plates from the corresponding **Qty / Quantity / No. / Repetition / Nos.** column of the Plate Table.
  Do not visually count plates from the drawing.
  Do not calculate the repetition count if it is explicitly provided in the table.
  Return null if it is not available.

- plate_profile:
  Extract the plate profile exactly as specified in the Plate Table.
  A plate profile may contain dimensions such as thickness × width × length, for example **12x200x2**, **12x200x300**, etc.
  Preserve the value as written in the table.
  Do not calculate or reconstruct the profile from drawing dimensions when the profile is available in the table.
  Return null if it is not available.

- weigth:
  Extract the plate weight from the corresponding **Weight / Wt. / Plate Weight** column of the Plate Table.
  Use the table value directly.
  Do not calculate the plate weight when it is explicitly provided in the table.
  Return null if it is not available.

- dia_of_lug:
  Extract the lug diameter from the corresponding **Lug Dia. / Lug Diameter / Dia. of Lug** field in the Plate Table.
  If the value is not available in the table, it may be extracted from the associated lug/plate detail drawing.
  Do not visually estimate the diameter.
  Return null if it cannot be determined.

- total_length_of_lug:
  Extract the total lug length from the corresponding **Lug Length / Total Lug Length** field in the Plate Table.
  If it is not available in the table, use the associated plate/lug detail drawing.
  Do not calculate the value if it is explicitly provided in the table.
  Return null if it cannot be determined.

- total_weight_of_lug:
  Extract the total lug weight from the corresponding **Lug Weight / Total Lug Weight** field in the Plate Table.
  If explicitly provided in the table, use that value directly.
  Do not calculate it from lug dimensions when the table provides the value.
  Return null if it cannot be determined.

**TABLE COLUMN VARIATIONS**

Column names may vary between drawings. Recognize equivalent headings such as:

- Plate Name → Plate Mark, Mark, Position, Reference
- Plate Repetition → Qty, Quantity, Nos., No., Repetition
- Plate Profile → Profile, Size, Plate Size, Dimensions
- Weight → Wt., Plate Weight, Weight (kg)
- Lug Diameter → Lug Dia., Dia. of Lug, Lug Ø
- Lug Length → Lug Length, Total Lug Length
- Lug Weight → Lug Wt., Lug Weight, Total Lug Weight

**FINAL RULE**

The **Plate Table is the source of truth for plate data**.

If the same information appears in both the Plate Table and the drawing, **always select the Plate Table value**.

Use the drawing/detail only to obtain information that is missing from the Plate Table.
`;