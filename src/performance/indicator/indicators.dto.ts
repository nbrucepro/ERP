import { ApiProperty } from '@nestjs/swagger';

export class IndicatorsDto {
  @ApiProperty({ example: 'designation' })
  designation: string;
  @ApiProperty({ example: 'advanced' })
  customerExperienceManagement: string;
  @ApiProperty({ example: 'intermediate' })
  marketing: string;
  @ApiProperty({ example: 'beginner' })
  management: string;
  @ApiProperty({ example: 'intermediate' })
  administration: string;
  @ApiProperty({ example: 'English' })
  presentationSkill: string;
  @ApiProperty({ example: 'intermediate' })
  qualityOfWork: string;
  @ApiProperty({ example: 'intermediate' })
  efficiency: string;
  @ApiProperty({ example: 'intermediate' })
  integrity: string;
  @ApiProperty({ example: 'intermediate' })
  pofessionalism: string;
  @ApiProperty({ example: 'intermediate' })
  teamWork: string;
  @ApiProperty({ example: 'intermediate' })
  criticalThinking: string;
  @ApiProperty({ example: 'intermediate' })
  conflictManagement: string;
  @ApiProperty({ example: 'intermediate' })
  attendance: string;
  @ApiProperty({ example: 'intermediate' })
  abilityToMeetDeadline: string;
}
